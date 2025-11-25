

import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { BackgroundAnimation } from "@/components/background-animation";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us - Aonflow',
    description: 'Explore all the medium to connect with aonflow and our experts.',
    alternates: {
        canonical: 'https://www.aonflow.com/contact-us',
    },
};

function PinterestIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 16 16" {...props}>
            <path fill="currentColor" d="M8.717 0C4.332 0 2 2.81 2 5.874c0 1.421.794 3.193 2.065 3.755.193.087.298.05.341-.129.038-.136.205-.791.286-1.1a.283.283 0 0 0-.068-.278c-.422-.488-.757-1.377-.757-2.211 0-2.137 1.699-4.212 4.59-4.212 2.5 0 4.249 1.624 4.249 3.947 0 2.625-1.389 4.441-3.194 4.441-.999 0-1.743-.784-1.507-1.754.285-1.155.844-2.397.844-3.23 0-.747-.422-1.365-1.284-1.365-1.017 0-1.842 1.007-1.842 2.359 0 .859.304 1.439.304 1.439l-1.193 4.823c-.316 1.285.043 3.366.074 3.545.019.099.13.13.192.049.099-.13 1.315-1.865 1.656-3.119.124-.457.633-2.31.633-2.31.335.605 1.302 1.112 2.332 1.112 3.064 0 5.278-2.693 5.278-6.035C14.988 2.397 12.246 0 8.717 0"></path>
        </svg>
    )
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}


export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full bg-primary/10 py-20 md:py-28 lg:py-32 overflow-hidden">
        <BackgroundAnimation className="absolute inset-0 z-0 opacity-50" />
        <AnimateOnScroll className="container mx-auto px-4 md:px-6 z-10 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-4xl font-light tracking-tight font-headline sm:text-5xl md:text-6xl text-primary">
              Contact Us
            </h1>
            <p className="max-w-2xl text-muted-foreground md:text-xl">
              We're here to help you grow
            </p>
          </div>
        </AnimateOnScroll>
      </section>

      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-10 lg:gap-16 items-start">
          {/* Left Column: Intro & Form */}
          <AnimateOnScroll className="mb-12 lg:mb-0 lg:col-span-7">
            <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">
              We're glad you contacted us. <span className="text-primary">It's fantastic to hear from you!</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Aonflow iPaaS offers powerful integration solutions that adapts to your specific needs, streamlines your workflows and boosts productivity. Aonflow iPaaS is the answer to your prayers.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Experience the power of Aonflow iPaaS and take your integration capabilities to the next level. Book your free demo today!
            </p>
            <Card className="w-full mt-12">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold font-headline mb-6">We make it happen for you</h3>
                <ContactForm />
              </CardContent>
            </Card>
          </AnimateOnScroll>

          {/* Right Column: Social, Address, Hours */}
          <AnimateOnScroll className="space-y-12 lg:col-span-3" delay={0.2}>
            <div>
              <h3 className="text-2xl font-bold font-headline mb-4">We are active on social media</h3>
              <p className="text-lg text-muted-foreground mb-6">
                We love hearing from our followers and engaging with them, so feel free to drop us a message or leave a comment. Join our social media community today!
              </p>
              <div className="flex items-center space-x-4">
                <Link href="https://www.facebook.com/theaonflow" target="_blank" className="text-primary hover:text-primary/80 transition-colors"><Facebook className="h-8 w-8"/></Link>
                <Link href="https://www.linkedin.com/company/aonflow/" target="_blank" className="text-primary hover:text-primary/80 transition-colors"><Linkedin className="h-8 w-8"/></Link>
                <Link href="https://www.instagram.com/aonflow.official/" target="_blank" className="text-primary hover:text-primary/80 transition-colors"><Instagram className="h-8 w-8"/></Link>
                <Link href="https://twitter.com/AonflowOfficial/" target="_blank" className="text-primary hover:text-primary/80 transition-colors"><XIcon className="h-8 w-8"/></Link>
                <Link href="https://www.pinterest.com/aonflow/" target="_blank" className="text-primary hover:text-primary/80 transition-colors"><PinterestIcon className="h-8 w-8"/></Link>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold font-headline mb-4">We'd be delighted to meet or connect with you</h3>
              <div className="space-y-4 text-lg">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span>
                    DAX Software Solutions Inc.<br/>
                    6303 Owensmouth Ave, 10th floor,<br/>
                    Woodland Hills, CA 91367
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                  <a href="mailto:contact@aonflow.com" className="hover:text-primary">contact@aonflow.com</a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold font-headline mb-4">Working hours</h3>
              <div className="space-y-4 text-lg">
                <div className="flex items-center gap-4">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Monday - Friday</p>
                    <p className="text-muted-foreground">9am - 5pm</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="h-6 w-6 text-muted-foreground flex-shrink-0" />
                   <div>
                    <p className="font-semibold">Saturday - Sunday</p>
                    <p className="text-muted-foreground">Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

       {/* Map Section */}
      <AnimateOnScroll className="w-full h-[400px] md:h-[500px] mt-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.859555191763!2d-118.57726268478239!3d34.15024998057918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c29ba7b43a5555%3A0x8ddc6f5be9491195!2s6303%20Owensmouth%20Ave%2C%20Woodland%20Hills%2C%20CA%2091367!5e0!3m2!1sen!2sus!4v1683838449156!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="DAX Software Solutions Inc. Location"
        ></iframe>
      </AnimateOnScroll>
    </div>
  );
}
