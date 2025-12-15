

import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ContentPageLayout } from '@/components/layout/content-page-layout';
import { AnimateOnScroll } from '@/components/animate-on-scroll';

export const metadata: Metadata = {
    title: 'Sitemap - Aonflow',
    description: 'Explore all pages and resources available on the Aonflow website.',
    alternates: {
        canonical: 'https://www.aonflow.com/sitemap',
    },
};

type WPPost = {
  slug: string;
  title: {
    rendered: string;
  };
};

const staticRoutes = {
  "Main": [
    { title: 'Home', href: '/' },
    { title: 'About Us', href: '/about' },
    { title: 'Contact Us', href: '/contact' },
    { title: 'Pricing', href: '/pricing' },
    { title: 'Careers', href: '/career' },
    { title: 'Partners', href: '/partner' },
  ],
  "Solutions": [
    { title: "All Solutions", href: "/solutions"},
    { title: "Healthcare", href: "/healthcare" },
    { title: "Human Resources", href: "/hr" },
    { title: "Information Technology", href: "/it" },
    { title: "Finance", href: "/finance" },
    { title: "Marketing", href: "/marketing" },
    { title: "E-commerce", href: "/e-commerce" },
    { title: "Sales", href: "/sales" },
    { title: "Customer Support", href: "/customer-support" },
    { title: "Product & Process", href: "/product-process" },
    { title: "Supply Chain", href: "/supply-chain" },
    { title: "iPaaS for SaaS", href: "/ipaas-for-saas" },
    { title: "Marketing Operations", href: "/marketing-operations" },
    { title: "Sales Operations", href: "/sales-operations" },
  ],
  "Integrations": [
    { title: "Salesforce", href: "/salesforce" },
    { title: "Dynamics 365", href: "/dynamics-365" },
    { title: "Google Sheets", href: "/google-sheets" },
    { title: "Twilio", href: "/twilio" },
    { title: "Netsuite", href: "/netsuite" },
    { title: "WooCommerce", href: "/woocommerce" },
    { title: "Shopify", href: "/shopify" },
    { title: "HubSpot", href: "/hubspot" },
    { title: "Zoho CRM", href: "/zoho-crm" },
    { title: "Stripe", href: "/stripe" },
    { title: "Slack", href: "/slack" },
    { title: "Microsoft Teams", href: "/microsoft-teams" },
    { title: "Microsoft Dynamics Business Central", href: "/microsoft-dynamics-business-central" },
    { title: "QuickBooks Online", href: "/quickbooks-online" },
  ],
  "Use Cases": [
    { title: "Cloud Integration", href: "/cloud-integration" },
    { title: "API Integration", href: "/api-integration" },
    { title: "Data Migration", href: "/data-migration" },
    { title: "B2B Integration", href: "/b2b-integration" },
  ],
  "Legal": [
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Security Policy", href: "/security-policy" },
    { title: "Terms of Service", href: "/terms-of-service" },
    { title: "Cookie Policy", href: "/cookie-policy" },
    { title: "Community Policy", href: "/community-policy" },
    { title: "Embedded Software Policy", href: "/embedded-software-policy" },
    { title: "Sub-Processors", href: "/sub-processors" },
  ],
  "Other": [
      { title: "Book a Demo", href: "/book-a-demo" },
      { title: "How It Works", href: "/how-it-works" },
      { title: "Product", href: "/product" },
      { title: "Blog", href: "/blog" },
      { title: "Documentation", href: "/documentation" },
  ]
};

const API_URL = 'https://linen-mule-572706.hostingersite.com/wp-json/wp/v2';

async function getAllPosts(): Promise<WPPost[]> {
  let allPosts: WPPost[] = [];
  let page = 1;
  const perPage = 100;
  let totalPages = 1;

  try {
    while (page <= totalPages) {
      const res = await fetch(`${API_URL}/posts?per_page=${perPage}&page=${page}&_fields=slug,title`, { next: { revalidate: 3600 }});
      if (!res.ok) {
        console.error(`Sitemap Page: Failed to fetch posts (page ${page}): ${res.statusText}`);
        break;
      }
      
      const totalPagesHeader = res.headers.get('x-wp-totalpages');
      if (totalPagesHeader) {
          totalPages = parseInt(totalPagesHeader, 10);
      }
      
      const posts: WPPost[] = await res.json();
      if (posts.length === 0) {
        break;
      }
      allPosts = allPosts.concat(posts);
      page++;
    }
  } catch (error) {
    console.error('Sitemap Page: Error fetching posts from WordPress:', error);
  }
  
  return allPosts;
}

export default async function SitemapPage() {
  const blogPosts = await getAllPosts();

  return (
    <ContentPageLayout title="Sitemap">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(staticRoutes).map(([category, links], index) => (
          <AnimateOnScroll key={category} delay={index * 0.1}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-primary">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {links.sort((a,b) => a.title.localeCompare(b.title)).map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-muted-foreground hover:text-primary hover:underline">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AnimateOnScroll>
        ))}
         <AnimateOnScroll delay={Object.keys(staticRoutes).length * 0.1} className="md:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-primary">Blog Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 max-h-96 overflow-y-auto">
                {blogPosts.map((post) => (
                  <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="text-muted-foreground hover:text-primary hover:underline">
                      <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </AnimateOnScroll>
      </div>
    </ContentPageLayout>
  );
}
