
"use client";

import { Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { BackgroundAnimation } from "@/components/background-animation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const tiers = [
  {
    plan: "Standard",
    price: "$99",
    transactions: "2,000",
    popular: false,
  },
  {
    plan: "Advance",
    price: "$199",
    transactions: "5,000",
    popular: true,
  },
  {
    plan: "Premium",
    price: "$499",
    transactions: "15,000",
    popular: false,
  },
];

const features = [
    "Enterprises only pay for what they use, keeping budgets predictable.",
    "No complex bundles or connector-based fees.",
    "As transactions grow, unit costs go down.",
    "Whether you integrate 2 systems or 20, the pricing remains usage-driven."
];

const keywords = [
    "Automated", "Onboard easy", "No-code", "Future-ready", 
    "Lean-priced", "Orchestration", "Well-integrated"
];

export default function PricingClientPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative w-full overflow-hidden bg-primary/5">
        <BackgroundAnimation className="absolute inset-0 z-0 opacity-50" />
        <div className="container relative z-10 mx-auto max-w-5xl px-4 py-20 md:py-28 lg:py-32">
            <AnimateOnScroll className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-headline">
                    Aonflow Pricing Simplified for Enterprises
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    At Aonflow, we believe pricing should empower growth, not complicate it. That’s why we’ve built our enterprise pricing model around a single, transparent metric: transactions. No hidden costs, no surprise fees—just a straightforward approach that scales with your business needs.
                </p>
            </AnimateOnScroll>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <AnimateOnScroll delay={0.2}>
                    <Card className="bg-background/70 backdrop-blur-sm p-8 h-full">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl text-primary">Why Transaction-Based Pricing?</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <ul className="space-y-4">
                                {features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                    <span className="text-muted-foreground">{feature}</span>
                                </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </AnimateOnScroll>
                <AnimateOnScroll delay={0.4}>
                    <div className="grid grid-cols-1 gap-8">
                        {tiers.map((tier) => (
                            <Card key={tier.plan} className={cn("relative flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-background/70 backdrop-blur-sm", tier.popular ? "border-primary border-2" : "")}>
                                 {tier.popular && (
                                    <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                                        <div className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                                            Popular
                                        </div>
                                    </div>
                                )}
                                <div className="mb-4 md:mb-0">
                                    <h3 className="text-xl font-bold font-headline">{tier.plan}</h3>
                                    <p className="text-2xl font-extrabold text-primary mt-1">
                                        {tier.price}
                                        <span className="text-sm font-medium text-muted-foreground">/month</span>
                                    </p>
                                </div>
                                <div className="text-left md:text-right">
                                    <p className="font-semibold">{tier.transactions} Transactions Included</p>
                                    <p className="text-xs text-muted-foreground">Additional transactions available</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </AnimateOnScroll>
            </div>
            
            <AnimateOnScroll className="text-center mt-16 max-w-3xl mx-auto">
                 <p className="text-muted-foreground">
                    With Aonflow, enterprises gain clarity and confidence. Your teams can focus on growth, innovation, and customer value—while we ensure seamless integration at a predictable cost.
                </p>
                <Button asChild size="lg" className="mt-8">
                    <Link href="/contact">Contact Sales</Link>
                </Button>
            </AnimateOnScroll>

        </div>
      </section>
        <div className="bg-primary/10 py-8">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2">
                    {keywords.map(keyword => (
                        <span key={keyword} className="font-semibold text-muted-foreground text-sm">{keyword}</span>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
}
