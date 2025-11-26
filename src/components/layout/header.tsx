

"use client";

import Link from "next/link";
import { Menu, X, LayoutGrid, Cloud, Cog, Database, Landmark, Bot } from "lucide-react";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";


const solutionsByFunction = [
    { title: "Healthcare", href: "/healthcare" },
    { title: "HR", href: "/hr" },
    { title: "IT", href: "/it" },
    { title: "Finance", href: "/finance" },
    { title: "Marketing", href: "/marketing" },
    { title: "E-commerce", href: "/e-commerce" },
    { title: "Marketing Operations", href: "/marketing-operations" },
    { title: "Sales", href: "/sales" },
    { title: "Sales Operations", href: "/sales-operations" },
    { title: "Customer Support", href: "/customer-support" },
    { title: "Product", href: "/product-process" },
    { title: "Supply Chain", href: "/supply-chain" },
    { title: "iPaaS for SaaS", href: "/ipaas-for-saas" },
];

const solutionsByApps = [
    { title: "Salesforce", href: "/salesforce" },
    { title: "Dynamics 365", href: "/dynamics-365" },
    { title: "Google Sheets", href: "/google-sheets" },
    { title: "Twilio", href: "/twilio" },
    { title: "Netsuite", href: "/netsuite" },
    { title: "WooCommerce", href: "/woocommerce" },
    { title: "Shopify", href: "/shopify" },
    { title: "HubSpot", href: "/hubspot" },
    { title: "Zoho CRM", href: "/zoho-crm" },
    { title: "Slack", href: "/slack" },
    { title: "Stripe", href: "/stripe" },
    { title: "Microsoft Teams", href: "/microsoft-teams" },
    { title: "Microsoft Dynamics Business Central", href: "/microsoft-dynamics-business-central" },
    { title: "QuickBooks Online", href: "/quickbooks-online" },
];

const solutionsByUseCase = [
    { title: "Cloud Integration", href: "/cloud-integration" },
    { title: "API Integration", href: "/api-integration" },
    { title: "Data Migration", href: "/data-migration" },
    { title: "B2B Integration", href: "/b2b-integration" },
];

const solutionsIntegrations = [
    { title: "Salesforce – QuickBooks Online", href: "/integrations/salesforce-quickbooks-online" },
    { title: "Salesforce – Business Central", href: "/integrations/salesforce-business-central" },
]

const companyLinks = [
  { title: "About Us", href: "/about" },
  { title: "Product", href: "/product" },
  { title: "How it works for you", href: "/how-it-works" },
  { title: "Careers", href: "/career" },
  { title: "Partner", href: "/partner" },
];

const resourceLinks = [
  { title: "Blog", href: "/blog" },
  { title: "Documentation", href: "/documentation" },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";


export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClasses = cn(
    "sticky top-0 z-50 w-full transition-colors duration-300",
    isScrolled
      ? "border-b bg-background/80 backdrop-blur-lg"
      : "border-transparent"
  );
    
  const triggerClasses = () =>
    cn(
      navigationMenuTriggerStyle(),
      "bg-transparent",
      isScrolled
        ? "text-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        : "text-foreground hover:bg-transparent hover:text-primary focus:bg-transparent focus:text-primary"
    );


  return (
    <header className={headerClasses}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Logo
          className="text-primary"
          svgClassName="h-10 w-auto"
        />
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={triggerClasses()}>Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <Tabs defaultValue="by-function" className="w-[800px] p-2">
                  <div className="mb-2 flex justify-center border-b pb-2">
                    <Button asChild variant="outline" className="rounded-full animated-gradient-border">
                        <Link href="/solutions">
                            <LayoutGrid className="mr-2 h-4 w-4" />
                            All Solutions
                        </Link>
                    </Button>
                  </div>
                  <div className="flex">
                    <TabsList className="flex flex-col h-auto bg-transparent p-0 border-r rounded-none">
                      <TabsTrigger value="by-function" className="w-full justify-start data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">By Function</TabsTrigger>
                      <TabsTrigger value="by-apps" className="w-full justify-start data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">By Apps</TabsTrigger>
                      <TabsTrigger value="by-use-cases" className="w-full justify-start data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">By Use Cases</TabsTrigger>
                      <TabsTrigger value="integrations" className="w-full justify-start data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Integrations</TabsTrigger>
                    </TabsList>
                    <div className="pl-2 h-[340px] overflow-y-auto flex-1">
                      <TabsContent value="by-function">
                        <ul className="grid grid-cols-2 list-none">
                           {solutionsByFunction.map((item) => (
                              <ListItem key={item.title} title={item.title} href={item.href} />
                          ))}
                        </ul>
                      </TabsContent>
                      <TabsContent value="by-apps">
                         <ul className="grid grid-cols-2 list-none">
                           {solutionsByApps.sort((a, b) => a.title.localeCompare(b.title)).map((item) => (
                              <ListItem key={item.title} title={item.title} href={item.href} />
                          ))}
                         </ul>
                      </TabsContent>
                      <TabsContent value="by-use-cases">
                         <ul className="grid grid-cols-2 list-none">
                           {solutionsByUseCase.map((item) => (
                              <ListItem key={item.title} title={item.title} href={item.href} />
                          ))}
                         </ul>
                      </TabsContent>
                      <TabsContent value="integrations">
                         <ul className="grid grid-cols-2 list-none">
                           {solutionsIntegrations.map((item) => (
                              <ListItem key={item.title} title={item.title} href={item.href} />
                          ))}
                        </ul>
                      </TabsContent>
                    </div>
                  </div>
                </Tabs>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
                <NavigationMenuTrigger className={triggerClasses()}>
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] list-none">
                    {companyLinks.map((subLink) => (
                      <ListItem
                        key={subLink.title}
                        title={subLink.title}
                        href={subLink.href}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

             <NavigationMenuItem>
                <NavigationMenuTrigger className={triggerClasses()}>
                  Resource
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] list-none">
                    {resourceLinks.map((subLink) => (
                      <ListItem
                        key={subLink.title}
                        title={subLink.title}
                        href={subLink.href}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/contact" className={triggerClasses()}>
                    Contact Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="outline"
            className={cn(
              "hidden lg:inline-flex",
              "text-foreground hover:bg-accent hover:text-accent-foreground"
            )}
          >
            <Link href="/book-a-demo">Book a demo</Link>
          </Button>
          <Button asChild className="hidden lg:inline-flex"><Link href="https://app.aonflow.com/auth/signup">Sign Up</Link></Button>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "hover:bg-white/10 hover:text-white",
                  "text-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background text-foreground p-0 w-full">
                <SheetHeader className="sr-only">
                    <SheetTitle>Mobile Navigation Menu</SheetTitle>
                    <SheetDescription>
                    Navigate through the Aonflow website sections.
                    </SheetDescription>
                </SheetHeader>
              <div className="flex h-full flex-col">
                <div className="p-6 pb-0 flex items-center justify-between">
                    <Logo className="text-primary" />
                    <SheetClose asChild>
                        <Button variant="ghost" size="icon" className="text-foreground hover:bg-accent hover:text-accent-foreground">
                            <X className="h-6 w-6" />
                        </Button>
                    </SheetClose>
                </div>
                <ScrollArea className="flex-1">
                    <div className="p-6">
                        <nav className="flex flex-col gap-4">
                            <Accordion type="multiple">
                                <AccordionItem value="solutions" className="border-b-0">
                                    <AccordionTrigger className="text-lg font-medium hover:no-underline [&[data-state=open]>svg]:text-primary">Solutions</AccordionTrigger>
                                    <AccordionContent>
                                        <div className="flex flex-col">
                                            <Link href="/solutions" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-muted-foreground font-semibold hover:text-primary pl-4">All Solutions</Link>
                                            <Tabs defaultValue="by-function" className="w-full">
                                                <TabsList className="grid grid-cols-2 h-auto">
                                                    <TabsTrigger value="by-function">By Function</TabsTrigger>
                                                    <TabsTrigger value="by-apps">By Apps</TabsTrigger>
                                                    <TabsTrigger value="by-use-cases">By Use Case</TabsTrigger>
                                                    <TabsTrigger value="integrations">Integrations</TabsTrigger>
                                                </TabsList>
                                                <TabsContent value="by-function" className="mt-2">
                                                    <div className="pl-4">
                                                        {solutionsByFunction.map((item) => (
                                                            <Link key={item.title} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-muted-foreground hover:text-primary">{item.title}</Link>
                                                        ))}
                                                    </div>
                                                </TabsContent>
                                                <TabsContent value="by-apps" className="mt-2">
                                                    <div className="pl-4">
                                                        {solutionsByApps.sort((a, b) => a.title.localeCompare(b.title)).map((item) => (
                                                            <Link key={item.title} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-muted-foreground hover:text-primary">{item.title}</Link>
                                                        ))}
                                                    </div>
                                                </TabsContent>
                                                <TabsContent value="by-use-cases" className="mt-2">
                                                    <div className="pl-4">
                                                        {solutionsByUseCase.map((item) => (
                                                            <Link key={item.title} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-muted-foreground hover:text-primary">{item.title}</Link>
                                                        ))}
                                                    </div>
                                                </TabsContent>
                                                <TabsContent value="integrations" className="mt-2">
                                                     <div className="pl-4">
                                                        {solutionsIntegrations.map((item) => (
                                                            <Link key={item.title} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-muted-foreground hover:text-primary">{item.title}</Link>
                                                        ))}
                                                    </div>
                                                </TabsContent>
                                            </Tabs>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                
                                <AccordionItem value="company" className="border-b-0">
                                <AccordionTrigger className="text-lg font-medium hover:no-underline [&[data-state=open]>svg]:text-primary">Company</AccordionTrigger>
                                <AccordionContent className="pl-4">
                                    {companyLinks.map((item) => (
                                        <Link key={item.title} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-muted-foreground hover:text-primary">{item.title}</Link>
                                    ))}
                                </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="resource" className="border-b-0">
                                <AccordionTrigger className="text-lg font-medium hover:no-underline [&[data-state=open]>svg]:text-primary">Resource</AccordionTrigger>
                                <AccordionContent className="pl-4">
                                    {resourceLinks.map((item) => (
                                        <Link key={item.title} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-muted-foreground hover:text-primary">{item.title}</Link>
                                    ))}
                                </AccordionContent>
                                </AccordionItem>

                                 <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium py-3">Contact Us</Link>

                            </Accordion>
                        </nav>
                    </div>
                </ScrollArea>
                <div className="p-6 pt-0 mt-auto">
                    <div className="flex flex-col gap-4">
                        <Button asChild variant="outline" className="animated-gradient-border">
                            <Link href="/book-a-demo" onClick={() => setIsMobileMenuOpen(false)}>Book a demo</Link>
                        </Button>
                        <Button asChild>
                            <Link href="https://app.aonflow.com/auth/signup" onClick={() => setIsMobileMenuOpen(false)}>Sign Up</Link>
                        </Button>
                    </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
