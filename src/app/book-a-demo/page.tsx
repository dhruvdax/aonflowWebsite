
import { Metadata } from 'next';
import { Card, CardContent } from "@/components/ui/card";
import { BackgroundAnimation } from "@/components/background-animation";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { BookADemoForm } from "@/components/book-a-demo-form";

export const metadata: Metadata = {
    title: 'Book a Demo - Aonflow',
    description: 'Schedule a demo to see our product/service in action and get a feel for how it works.',
    alternates: {
        canonical: 'https://www.aonflow.com/book-a-demo',
    },
};

export default function BookADemoPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full bg-primary/10 py-20 md:py-28 lg:py-32 overflow-hidden">
        <BackgroundAnimation className="absolute inset-0 z-0 opacity-50" />
        <AnimateOnScroll className="container mx-auto px-4 md:px-6 z-10 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-4xl font-light tracking-tight font-headline sm:text-5xl md:text-6xl text-primary">
              Book a Demo
            </h1>
             <p className="max-w-3xl text-muted-foreground md:text-lg">
              To schedule a demo, simply schedule the call as per your convenience.
            </p>
          </div>
        </AnimateOnScroll>
      </section>

      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <AnimateOnScroll className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="pt-8">
              <BookADemoForm />
            </CardContent>
          </Card>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
