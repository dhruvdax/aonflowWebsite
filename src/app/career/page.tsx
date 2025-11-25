

import Image from "next/image";
import Link from "next/link";
import { 
    Heart, 
    Lightbulb, 
    Users, 
    Smile,
    Briefcase,
    Globe,
    CheckCircle,
    Award,
    TrendingUp,
    HeartHandshake,
    Target,
    Building,
    UserCog,
    Star,
    Sparkles,
    Handshake
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


const adventurePoints = [
    {
        image: "/career/talent-hunt.jpg",
        title: "Learn fast",
        description: "We are a team of experienced professionals who are passionate about helping businesses succeed.",
        hint: "job interview"
    },
    {
        image: "/career/job-for-everyone.jpg",
        title: "Make an impact",
        description: "We have a proven track record of delivering high-quality products and services that meet the needs of our customers.",
        hint: "office team"
    },
    {
        image: "/career/we-are-team.jpg",
        title: "Be yourself",
        description: "We are committed to providing our customers with the best possible experience.",
        hint: "teamwork collaboration"
    }
]

const culturePoints = [
    { icon: Heart, text: "We pride ourselves on our collaborative, supportive, and fun-loving culture. We believe that our people are our greatest asset and that teamwork is the key to our success." },
    { icon: Users, text: "We're dedicated to fostering a diverse and inclusive workplace where everyone feels valued, respected, and empowered." },
    { icon: Smile, text: "Our employees are passionate about what they do and are always willing to go the extra mile to help each other out." },
    { icon: Briefcase, text: "Our values are at the core of everything we do. They guide our decision-making, shape our culture, and define who we are as a company." },
];

const offerPoints = [
    { icon: HeartHandshake, text: "We believe in being transparent and honest with each other." },
    { icon: Users, text: "We are obsessed with our customers and work backwards to earn and keep their trust." },
    { icon: Target, text: "We take ownership of our actions and results." },
    { icon: Lightbulb, text: "We are always looking for new ways to simplify our process and technology." },
    { icon: Users, text: "We work together to achieve our common goals." },
];

const reasons = [
    { icon: Lightbulb, title: "Innovative technology", description: "We're at the forefront of iPaaS technology, and we're constantly pushing the boundaries of what's possible." },
    { icon: Users, title: "Collaborative environment", description: "We're a tight-knit team that's dedicated to working together to achieve our goals." },
    { icon: TrendingUp, title: "Career development", description: "We believe in investing in our employees' professional development and offer a range of training and career advancement opportunities." },
    { icon: Award, title: "Competitive compensation", description: "We offer competitive salaries and benefits packages to ensure that our employees are compensated well for their hard work." },
    { icon: Handshake, title: "Flexibility", description: "We understand that our employees have lives outside of work, and we offer flexible schedules and remote work options to accommodate their needs." },
    { icon: Sparkles, title: "Diverse culture", description: "We believe in creating a workplace that is inclusive and welcoming to all. We value diversity and recognize the unique perspectives and contributions that each individual brings to the table." },
    { icon: Target, title: "Purpose-driven", description: "We're not just in this for the money; we're passionate about making a difference and having a positive impact on the world." },
    { icon: Building, title: "Team building", description: "We believe in having fun and building strong relationships with our colleagues. We regularly organize team-building events and activities to foster a sense of camaraderie." }
]

export default function CareerPage() {
    const heroImage = PlaceHolderImages.find(img => img.id === 'career-hero');

    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative w-full bg-primary/10 py-20 md:py-28 lg:py-32 overflow-hidden">
                <AnimateOnScroll className="container mx-auto px-4 md:px-6 z-10 relative">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline">
                                Unlock your future: join our <span className="text-primary">journey to success!</span>
                            </h1>
                            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                                We believe in fostering a culture of innovation, learning, and collaboration, where every employee is valued and has the opportunity to grow and thrive.
                            </p>
                             <Button asChild size="lg" className="mt-8">
                                <Link href="/contact">Join Us</Link>
                            </Button>
                        </div>
                        {heroImage && (
                             <div className="flex justify-center">
                                <Image src='/career/career-hero.jpg' alt="Careers at Aonflow" width={400} height={400} className="object-cover rounded-[20px]" data-ai-hint={heroImage.imageHint} />
                            </div>
                        )}
                    </div>
                </AnimateOnScroll>
            </section>
            
            <section className="py-20 md:py-28">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold font-headline">Come along with us on this adventure, and let's make a difference, together!</h2>
                    </AnimateOnScroll>
                    <div className="grid md:grid-cols-3 gap-8">
                        {adventurePoints.map((point, index) => (
                            <AnimateOnScroll key={index} delay={index * 0.1}>
                                <Card className="overflow-hidden h-full">
                                    <Image src={point.image} alt={point.title} width={400} height={400} className="w-full h-64 object-cover aspect-square" data-ai-hint={point.hint} />
                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-bold font-headline mb-2">{point.title}</h3>
                                        <p className="text-muted-foreground text-sm">{point.description}</p>
                                    </CardContent>
                                </Card>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28 bg-primary/5">
                <div className="container mx-auto px-4 md:px-6">
                     <AnimateOnScroll>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                             <div className="flex justify-center">
                                <Image src="/career/join-team.jpg" alt="Dream Team" width={500} height={400} className="object-cover rounded-2xl" data-ai-hint="team meeting" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold font-headline">Join the dream team</h2>
                                <p className="mt-4 text-lg text-muted-foreground">
                                    We are a team of passionate and dedicated professionals who are committed to making a difference. We are looking for talented individuals who share our vision and are eager to contribute to our success. Join our team and be a part of something extraordinary!
                                </p>
                                <Button asChild variant="link" className="p-0 mt-4 text-lg">
                                    <Link href="/about">Learn more</Link>
                                </Button>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

             <section className="py-20 md:py-28">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold font-headline">Why work with us?</h2>
                        <p className="mt-4 text-muted-foreground">We believe in creating a work environment where our employees can thrive, grow, and make a real impact. We are committed to fostering a culture of innovation, collaboration, and continuous learning, where every team member is empowered to contribute their unique skills and perspectives.</p>
                    </AnimateOnScroll>
                    
                    <AnimateOnScroll delay={0.2}>
                        <Tabs defaultValue="culture" className="max-w-4xl mx-auto">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="culture">Our culture. Our people.</TabsTrigger>
                                <TabsTrigger value="unique">What makes us unique</TabsTrigger>
                            </TabsList>
                            <TabsContent value="culture">
                                <div className="grid md:grid-cols-2 gap-8 items-center mt-8">
                                    <ul className="space-y-6">
                                        {culturePoints.map((item, index) => (
                                            <li key={index} className="flex items-start gap-4">
                                                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                                                  <item.icon className="h-6 w-6 text-primary" />
                                                </div>
                                                <span className="text-muted-foreground">{item.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                     <div className="flex justify-center">
                                        <Image src="/career/our-culture.jpg" alt="Our Culture" width={800} height={500} className="rounded-lg object-cover" data-ai-hint="team handshake" />
                                    </div>
                                </div>
                            </TabsContent>
                             <TabsContent value="unique">
                                <div className="grid md:grid-cols-2 gap-8 items-center mt-8">
                                    <ul className="space-y-6">
                                        {offerPoints.map((item, index) => (
                                            <li key={index} className="flex items-start gap-4">
                                                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                                                  <item.icon className="h-6 w-6 text-primary" />
                                                </div>
                                                <span className="text-muted-foreground">{item.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                     <div className="flex justify-center">
                                        <Image src="/career/we-unique.jpg" alt="What makes us unique" width={800} height={500} className="rounded-lg object-cover" data-ai-hint="team happy" />
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </AnimateOnScroll>
                </div>
            </section>
            
            <section className="py-20 md:py-28 bg-primary/5">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimateOnScroll>
                        <Card className="p-8 md:p-12 lg:p-16 bg-background">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold font-headline">Join us, and experience the difference for yourself!</h2>
                                    <p className="mt-4 text-muted-foreground">We are always on the lookout for talented and passionate individuals to join our team. If you are ready to take your career to the next level and be part of a dynamic and innovative company, we would love to hear from you.</p>
                                    <Button asChild className="mt-6">
                                        <Link href="/contact">Get in touch</Link>
                                    </Button>
                                </div>
                                <div className="flex justify-center">
                                    <Image src="/career/employees.jpg" alt="Join us" width={400} height={300} className="rounded-lg object-cover" data-ai-hint="team working" />
                                </div>
                            </div>
                        </Card>
                    </AnimateOnScroll>
                </div>
            </section>

            <section className="py-20 md:py-28">
                <div className="container mx-auto px-4 md:px-6">
                     <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold font-headline">Reasons to <span className="text-primary">join us</span></h2>
                        <p className="mt-4 text-muted-foreground">We offer a unique and rewarding work experience</p>
                    </AnimateOnScroll>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {reasons.map((reason, index) => (
                             <AnimateOnScroll key={index} delay={index * 0.1}>
                                <Card className="p-6 flex items-start gap-6 bg-transparent border-0 shadow-none">
                                    <div className="bg-primary/10 text-primary p-3 rounded-full flex-shrink-0">
                                        <reason.icon className="h-8 w-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold font-headline mb-2">{reason.title}</h3>
                                        <p className="text-muted-foreground">{reason.description}</p>
                                    </div>
                                </Card>
                            </AnimateOnScroll>
                        ))}
                    </div>
                    <AnimateOnScroll className="text-center mt-12">
                        <Link href="#join-us" className="text-primary font-semibold hover:underline">
                            Join us, and be a part of a team that's making a difference!
                        </Link>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Join Us CTA Section */}
            <section id="join-us" className="py-20 md:py-28 bg-primary/5">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimateOnScroll className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold font-headline">Ready to Join Us?</h2>
                        <p className="mt-4 text-muted-foreground">
                            We are always looking for talented and passionate individuals to join our team. If you are excited about the prospect of working in a dynamic and innovative environment, we would love to hear from you. Check out our open positions below!
                        </p>
                        <Button asChild size="lg" className="mt-8">
                            <Link href="/contact">Get in Touch</Link>
                        </Button>
                    </AnimateOnScroll>
                </div>
            </section>
        </div>
    );
}
