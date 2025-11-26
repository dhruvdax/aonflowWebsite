
import Link from "next/link";
import { Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const footerLinks = {
  solutions: [
    { title: "HR", href: "/hr" },
    { title: "Sales", href: "/sales" },
    { title: "Marketing", href: "/marketing" },
    { title: "IT", href: "/it" },
    { title: "View All", href: "/solutions" },
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Security Policy", href: "/security-policy" },
    { title: "Community Policy", href: "/community-policy" },
    { title: "Embedded Software Policy", href: "/embedded-software-policy" },
    { title: "Sub Processors", href: "/sub-processors" },
    { title: "Terms of Use", href: "/terms-of-service" },
  ],
  company: [
    { title: "About Us", href: "/about" },
    { title: "Partner", href: "/partner" },
    { title: "Career", href: "/career" },
    { title: "Contact Us", href: "/contact" },
    { title: "Blog", href: "/blog" },
    { title: "Documentation", href: "/documentation" },
  ],
};

const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", name: "Facebook" },
    { icon: Linkedin, href: "https://linkedin.com", name: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", name: "Instagram" },
    { icon: Twitter, href: "https://twitter.com", name: "Twitter" },
];

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

export function Footer() {
    return (
      <footer className="bg-[#eef1fc] text-foreground border-t">
        <div className="container mx-auto px-4 py-12 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="col-span-2 md:col-span-1">
                    <h3 className="font-bold text-lg mb-4 text-foreground">AONFLOW</h3>
                    <p className="text-muted-foreground text-sm mb-6 max-w-xs">
                        Your one-stop secure, safe, and top-tier integration solution to connect applications and automate your business with ease.
                    </p>
                    <div className="space-y-4 text-sm">
                        <div className="flex items-start gap-3">
                            <MapPin className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                            <span className="text-foreground">
                                6303 Owensmouth Ave, 10th floor,<br/>
                                Woodland Hills, CA 91367
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                            <Link href="mailto:contact@aonflow.com" className="text-foreground hover:text-primary">contact@aonflow.com</Link>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="font-semibold mb-4 text-foreground">SOLUTIONS</h4>
                    <ul className="space-y-3">
                        {footerLinks.solutions.map((link) => (
                            <li key={link.title}>
                                <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-4 text-foreground">LEGAL</h4>
                    <ul className="space-y-3">
                        {footerLinks.legal.map((link) => (
                            <li key={link.title}>
                                <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-4 text-foreground">COMPANY</h4>
                    <ul className="space-y-3">
                        {footerLinks.company.map((link) => (
                            <li key={link.title}>
                                <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

             <div className="mt-16 border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between">
                <div className="text-sm text-muted-foreground flex gap-6 items-center">
                    <span>&copy; {new Date().getFullYear()} Aonflow</span>
                    <Link href="/cookie-policy" className="hover:text-primary">Cookie Policy</Link>
                    <Link href="/sitemap.xml" className="hover:text-primary">Sitemap</Link>
                </div>

                <div className="flex items-center gap-4 mt-4 sm:mt-0">
                    <span className="text-sm text-muted-foreground">Follow us</span>
                    <Link href="https://www.facebook.com/theaonflow" target="_blank" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5"/></Link>
                    <Link href="https://www.linkedin.com/company/aonflow/" target="_blank" className="text-muted-foreground hover:text-primary"><Linkedin className="h-5 w-5"/></Link>
                    <Link href="https://www.instagram.com/aonflow.official/" target="_blank" className="text-muted-foreground hover:text-primary"><Instagram className="h-5 w-5"/></Link>
                    <Link href="https://twitter.com/AonflowOfficial/" target="_blank" className="text-muted-foreground hover:text-primary"><XIcon className="h-5 w-5"/></Link>
                    <Link href="https://www.pinterest.com/aonflow/" target="_blank" className="text-muted-foreground hover:text-primary"><PinterestIcon className="h-5 w-5"/></Link>
                </div>
            </div>
        </div>
      </footer>
    );
  }
